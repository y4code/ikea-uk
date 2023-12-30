# clean data.jsonl
echo "cleaning data.jsonl"
rm data.jsonl
touch data.jsonl
echo "cleaning data.jsonl done"

# use venv
echo "using venv"
source venv/bin/activate

# run spider
echo "running spider"
scrapy runspider main.py -o data.jsonl
echo "running spider done"

# data filtering
echo "filtering data"
python3 filter.py
echo "filtering data done"