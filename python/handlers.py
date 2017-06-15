import tornado.web
import json

COMPUTER_GOODS = [
    {"id": 1, "name": 'LG22MP48HQ-P', "type": "monitor", "price": 500},
    {"id": 1, "name": 'PhilipsBDM4037UW', "type": "monitor", "price": 450},
    {"id": 1, "name": 'HAFFMaximaRAM4', "type": "pc", "price": 1200},
    {"id": 1, "name": 'BVKAdvanced010', "type": "pc", "price": 1500}
]

class GoodsListRequestHandler(tornado.web.RequestHandler):

    def get(self, *args, **kwargs):

        json_string = json.dumps(COMPUTER_GOODS)

        self.write(
            json_string
        )


class GoodsItemRequestHandler(tornado.web.RequestHandler):

    def get(self, *args, **kwargs):

        name = self.get_argument("name")

        for i in COMPUTER_GOODS:
            if i["name"] == name:
                self.write(
                    i
                )

    def post(self, *args, **kwargs):

        name = self.get_argument("name")
        good_id = self.get_argument("id")
        type = self.get_argument("type")
        price = self.get_argument("price")

        COMPUTER_GOODS.append({"id": good_id, "name": name, "type": type, "price": price})

        self.write(COMPUTER_GOODS)




COMPUTER_GOODS2 = [{"id": 1, "name": 'qwerty'}]

class CustomRequestHandler2(tornado.web.RequestHandler):

    def get(self, *args, **kwargs):

        name = self.get_argument("name")

        for i in COMPUTER_GOODS2:
            if i["name"] == name:
                self.write(
                    i
                )