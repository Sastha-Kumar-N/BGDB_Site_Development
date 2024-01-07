import time
import random
import os

def generate_jumbled_title():
    title = list("AGTCAGTCAGTC")
    random.shuffle(title)
    return ''.join(title)

def create_txt_file(title):
    filename = f"{title}.txt"
    with open(filename, 'w') as file:
        file.write(f"Content of {title} file.")

def main():
    interval_between_files = 2  # seconds
    interval_between_batches = 10  # seconds
    files_per_batch = 5

    try:
        while True:
            for _ in range(files_per_batch):
                title = generate_jumbled_title()
                create_txt_file(title)
                time.sleep(interval_between_files)

            print(f"Waiting for {interval_between_batches} seconds...")
            time.sleep(interval_between_batches)

    except KeyboardInterrupt:
        print("Program terminated by user.")

if __name__ == "__main__":
    main()
