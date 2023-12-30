import json

def organize_data(jsonl_data):
    organized_data = {}
    for item in jsonl_data:
        room = item['room_name']
        # 将价格字符串转换为纯数字
        price = float(item['price'].replace('£', '').strip())
        product_info = {
            "name": item['name'],
            "url": item['url'],
            "image_urls": item['image_urls'],
            "price": price,
            "description": item['description'],
            "category_name": item['category_name']
        }

        if room not in organized_data:
            organized_data[room] = []

        organized_data[room].append(product_info)

    # 对每个room的产品按价格排序并只保留价格最低的前200个
    for room in organized_data:
        organized_data[room].sort(key=lambda x: x['price'])
        organized_data[room] = organized_data[room][:200]

    # 将组织好的数据转换为所需格式
    result = []
    for room, products in organized_data.items():
        room_info = {"room_name": room, "products": products}
        result.append(room_info)

    return result

# 读取JSONL文件
jsonl_data = []
with open('data.jsonl', 'r') as file:
    for line in file:
        jsonl_data.append(json.loads(line))

# 调用函数处理数据
organized_json = organize_data(jsonl_data)

# 将处理后的结果保存为data.json
with open('data.json', 'w') as json_file:
    json.dump(organized_json, json_file, indent=2)

print("数据已保存为data.json")
