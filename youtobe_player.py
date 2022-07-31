import selenium.webdriver.support.ui as ui
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
from time import sleep
import os
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions
import undetected_chromedriver as uc
chrome_options = uc.ChromeOptions()


class YoutubePlayer:
    url = "https://www.youtube.com/"

    def __init__(self, driver):
        self.black_sheet = self.load_black_sheet()
        self.has_ad = False
        self.current = None
        self.duration = None
        self.driver = driver
        self.wait = ui.WebDriverWait(self.driver, 10)
        self.go_to_youtube_homepage()
        self.total_skip_ad = 0

    def load_black_sheet(self):
        black_sheet = []
        if os.path.exists('black_sheet.txt'):
            print("Find Black Sheet")
            with open('black_sheet.txt', 'r') as finn:
                for i in finn.readlines():
                    black_sheet.append(i.strip())

        else:
            print("Doesn't find black_sheet.txt.")
            print("You can create one.")

        return black_sheet

    def go_to_youtube_homepage(self):
        self.driver.get(YoutubePlayer.url)
        sleep(1)


    def choose_do(self):
        print("1: Search Song")
        print("2: Start or Stop")
        #youtube.next_button.click()

    def search_box(self):
        return self.driver.find_element(By.ID, "search")

    def lookup_time(self):
        # self.hover_on_video()
        # sleep(0.2)
        self.current = self.left_time()
        self.duration = self.right_time()
        # self.hover_out()

    def left_time(self):
        try:
            WebDriverWait(self.driver, 60).until(expected_conditions.presence_of_element_located((By.CLASS_NAME, 'ytp-time-current')))
            time_current = self.driver.find_element(By.CLASS_NAME, "ytp-time-current")
            return time_current.get_attribute('textContent')
        except:
            return None

    def right_time(self):
        try:
            WebDriverWait(self.driver, 60).until(
                expected_conditions.presence_of_element_located((By.CLASS_NAME, 'ytp-time-duration')))
            time_duration = self.driver.find_element(By.CLASS_NAME, "ytp-time-duration")
            return time_duration.get_attribute('textContent')
        except:
            return None

    def check_end(self):
        if self.current and self.duration:
            print(self.current, self.duration)
            return self.current == self.duration
        else:
            return False

    def player(self):
        return self.driver.find_element(By.CLASS_NAME, "html5-video-container")

    def time_display(self):
        return self.driver.find_element(By.CLASS_NAME, "ytp-time-display")

    def play_button(self):
        return self.driver.find_element(By.CLASS_NAME, "ytp-play-button")

    def next_button(self):
        return self.driver.find_element(By.CLASS_NAME, "ytp-next-button")

    def next_video(self):
        videos = self.driver.find_elements(By.ID, "video-title")
        videos = [i for i in videos if i.is_displayed()]
        return videos[0]

    def go_next_video(self):
        self.current = None
        self.duration = None
        self.next_video().click()
        sleep(1)

    def title(self):
        return self.driver.title

    def search_and_go_first(self, search_word):
        WebDriverWait(self.driver, 60).until(expected_conditions.presence_of_element_located((By.ID, 'search')))
        search_box = self.driver.find_elements(By.ID, 'search')
        search_box[1].send_keys(search_word)
        search_box[1].send_keys(Keys.ENTER)
        sleep(3)
        WebDriverWait(self.driver, 60).until(expected_conditions.presence_of_element_located((By.ID, 'thumbnail')))
        video_items = self.driver.find_elements(By.ID, "thumbnail")
        video_items = [i for i in video_items if i.is_displayed()]
        video_items[0].click()
        sleep(5)

    def hover_on_video(self):
        hover = ActionChains(self.driver).move_to_element(
                self.driver.find_element(By.CLASS_NAME, "html5-main-video"))
        hover.perform()

    def hover_out(self):
        hover = ActionChains(self.driver).move_to_element(
            self.driver.find_element(By.CLASS_NAME, "yt-view-count-renderer"))
        hover.perform()

    def check_ad(self):
        try:
            self.driver.find_element(By.CLASS_NAME, "videoAdUiPreSkipButton").click()
            self.has_ad = True
            return self.driver.find_element(By.CLASS_NAME, "videoAdUiPreSkipText").text
        except:
            return None

    def skip_ad(self):
        try:
            self.has_ad = False
            self.total_skip_ad += 1
            print("已跳過{}個廣告".format(self.total_skip_ad))
            self.driver.find_element(By.CLASS_NAME, "videoAdUiSkipButton").click()
            sleep(1)
        except:
            return None

    def check_hate(self):
        title = self.title().lower()
        for hate in self.black_sheet:
            if hate in title:
                return True
        return False

    def quit(self):
        self.driver.quit()
