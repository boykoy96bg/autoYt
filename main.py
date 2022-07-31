import util
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions
import time
import re
from concurrent.futures import ThreadPoolExecutor, as_completed
from tqdm import tqdm

from youtobe_player import YoutubePlayer

URL_LOGIN_MAIL = 'https://mail.google.com/'


def get_accounts():
    accounts = []
    account_lines = util.get_list_from_file(filename="accounts.txt")
    for line in account_lines:
        accounts.append({
            "email": line.split("|")[0],
            "password": line.split("|")[1]
        })
    return accounts


def login_mail():
    accounts = get_accounts()
    proxies = util.get_list_from_file("proxy.txt")
    processes = []
    profile_text = ''
    with tqdm(total=len(accounts)) as process_bar:
        with ThreadPoolExecutor(max_workers=1) as executor:
            for i, account in enumerate(accounts):
                processes.append(executor.submit(login_mail_service, account, proxies[i], process_bar))
            for task in as_completed(processes):
                if task.result():
                    profile_text += "{}\n".format(task.result())

    with open("profile.txt", "w") as f:
        f.write("{}\n".format(profile_text))


def login_mail_service(acc, proxy, process_bar):
    process_bar.update(1)
    profile_name = acc.get("email").split('@')[0]
    driver = util.get_driver(profile_name=profile_name, proxy=proxy)
    try:
        driver.get(URL_LOGIN_MAIL)
        WebDriverWait(driver, 60).until(expected_conditions.presence_of_element_located((By.ID, 'headingSubtext')))
        sub_title = driver.find_element(By.ID, "headingSubtext").text
        if sub_title:
            WebDriverWait(driver, 60).until(
                expected_conditions.presence_of_element_located((By.ID, 'identifierId')))
            time.sleep(3)
            driver.find_element(By.ID, "identifierId").send_keys(acc.get("email"))
            time.sleep(5)
            driver.find_element(By.ID, 'identifierNext').click()
            time.sleep(5)
            driver.find_element(By.XPATH, '//*[@id="password"]/div[1]/div/div[1]/input').send_keys(acc.get("password"))
            time.sleep(5)
            driver.find_element(By.ID, 'passwordNext').click()
            time.sleep(10)
            driver.quit()
        return '{}|{}'.format(profile_name, proxy)
    except Exception as e:
        driver.quit()
        print(e)
        return None


def auto_view():
    profiles = util.get_list_from_file(filename="profile.txt")
    with tqdm(total=len(profiles)) as process_bar:
        with ThreadPoolExecutor(max_workers=2) as executor:
            for i, profile in enumerate(profiles):
                if not profile or profile is None:
                    continue
                executor.submit(auto_view_service, profile, process_bar)


def auto_view_service(profile, process_bar):
    process_bar.update(1)
    profile_name = profile.split("|")[0]
    proxy = profile.split("|")[1]
    driver = util.get_driver(profile_name=profile_name, proxy=proxy)
    try:
        # YOUTOBE = 'https://www.youtube.com/watch?v=m8rnbHVL9KA'
        # driver.get(YOUTOBE)
        # WebDriverWait(driver, 30).until(
        #     expected_conditions.presence_of_element_located((By.CLASS_NAME, 'ytp-time-duration')))
        # driver.find_element(By.XPATH, '//*[@id="movie_player"]/div[4]/button').click()
        # length_str = driver.find_element(By.CLASS_NAME, "ytp-time-duration").text
        # current_time_str = driver.find_element(By.CLASS_NAME, "ytp-time-current").text
        # length = re.findall(r'\d+', length_str)  # convert ['2:24'] to ['2', '24']
        # current_time = re.findall(r'\d+', current_time_str)
        # length_sec = 60 * int(length[0]) + int(length[1])
        # current_time_sec = (60 * int(current_time[0]) + int(current_time[1]))
        # remaining_time = length_sec - current_time_sec
        # print('length', length, length_sec)
        # print('current_time', current_time, current_time_sec)
        # print('remaining_time', remaining_time)
        # time.sleep(remaining_time - 5)
        # driver.quit()
        # return True
        youtube = YoutubePlayer(driver=driver)
        search_word = 'thuong em den gia'
        now_title = youtube.title()
        youtube.search_and_go_first(search_word)
        while True:
            if now_title != youtube.title():
                now_title = youtube.title()
                print(now_title)
                try:
                    print("next: {}".format(youtube.next_video().text))
                except:
                    pass
            else:
                youtube.lookup_time()
                print(youtube.current, youtube.duration)

            # ad_word = youtube.check_ad()
            # if youtube.has_ad:
            #     if ad_word:
            #         print(ad_word)
            #     else:
            #         youtube.skip_ad()

            if youtube.check_end():
                # youtube.go_next_video()
                driver.quit()

            elif youtube.check_hate():
                print("You hate '{}'".format(youtube.title()))
                print("Skipping....")
                driver.quit()
                # youtube.go_next_video()
            time.sleep(1)
    except Exception as e:
        print(e)
        driver.quit()
        return None


if __name__ == '__main__':
    login_mail()
    #auto_view()
