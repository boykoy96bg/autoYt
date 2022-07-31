from argparse import ArgumentTypeError
from urllib.parse import quote
import random
import undetected_chromedriver.v2 as uc
import os


def str2bool(v):
    if isinstance(v, bool):
        return v
    if v.lower() in ("yes", "true", "t", "y", "1"):
        return True
    elif v.lower() in ("no", "false", "f", "n", "0"):
        return False
    else:
        raise ArgumentTypeError("Boolean value expected.")


def normalize_to_url_string(url=''):
    return quote(url, safe="%/:=&?~#+!$,;'@()*[]")


def get_driver(profile_name="", proxy=""):
    while True:
        try:
            proxy_arr = proxy.split(":")
            proxy_host = proxy_arr[0]
            proxy_port = proxy_arr[1]
            proxy_user = proxy_arr[2]
            proxy_pass = proxy_arr[3]
            manifest_json = """
            {
                "version": "1.0.0",
                "manifest_version": 2,
                "name": "Chrome Proxy",
                "permissions": [
                    "proxy",
                    "tabs",
                    "unlimitedStorage",
                    "storage",
                    "<all_urls>",
                    "webRequest",
                    "webRequestBlocking"
                ],
                "background": {
                    "scripts": ["background.js"]
                },
                "minimum_chrome_version":"22.0.0"
            }
            """

            background_js = """
            var config = {
                    mode: "fixed_servers",
                    rules: {
                      singleProxy: {
                        scheme: "http",
                        host: "%s",
                        port: parseInt(%s)
                      },
                      bypassList: ["localhost"]
                    }
                  };

            chrome.proxy.settings.set({value: config, scope: "regular"}, function() {});

            function callbackFn(details) {
                return {
                    authCredentials: {
                        username: "%s",
                        password: "%s"
                    }
                };
            }

            chrome.webRequest.onAuthRequired.addListener(
                        callbackFn,
                        {urls: ["<all_urls>"]},
                        ['blocking']
            );
            """ % (proxy_host, proxy_port, proxy_user, proxy_pass)
            chrome_options = uc.ChromeOptions()
            path_proxy_ex = 'D:\\pythonProject\\autoYoutobe\\extension_chrome\\proxy\\proxy_{name}\\'.format(name=proxy_host)
            if not os.path.exists(path_proxy_ex):
                os.makedirs(path_proxy_ex)
            with open(path_proxy_ex + "manifest.json", "w") as f:
                f.write(manifest_json)
            with open(path_proxy_ex + "background.js", "w") as f:
                f.write(background_js)
            ex = path_proxy_ex + ',' + 'D:\\pythonProject\\autoYoutobe\\extension_chrome\\windows\\ads_block'
            chrome_options.add_argument('--load-extension={}'.format(ex))
            # chrome_options.add_argument("--window-size=600,600")
            chrome_options.add_argument('--user-data-dir=c:\\temp\\{profile_name}'.format(profile_name=profile_name))
            # chrome_options.add_argument("start-maximized")
            driver = uc.Chrome(driver_executable_path='./chromedriver/windows/chromedriver.exe', options=chrome_options)
            driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
            driver.execute_cdp_cmd(
                "Network.setUserAgentOverride",
                {
                    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.53 Safari/537.36"
                },
            )
            return driver
        except Exception as e:
            print(e)
            continue


def random_proxy(lst_proxy):
    return lst_proxy[random.randint(0, len(lst_proxy) - 1)]


def random_data(list_data):
    try:
        return list_data[random.randint(0, len(list_data) - 1)]
    except Exception as e:
        print(e)
        return None


def get_list_from_file(path_folder="", filename=""):
    try:
        file_path = path_folder + filename
        with open(file_path) as f:
            list_data = f.read().split("\n")
        f.close()
        return list_data
    except Exception as e:
        print(e)
        return []
