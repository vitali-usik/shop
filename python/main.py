import tornado
import tornado.web
import tornado.httpserver
import tornado.ioloop

import handlers

def run_server():
    app = tornado.web.Application(
        [
            (r"/goods", handlers.GoodsListRequestHandler),
            (r"/good", handlers.GoodsItemRequestHandler),
            (r"/goods/add", handlers.GoodsItemAddRequestHandler),
            (r"/get_good2", handlers.CustomRequestHandler2)
        ]
    )
    server = tornado.httpserver.HTTPServer(app)
    server.bind(8092)
    server.start(1)
    tornado.ioloop.IOLoop.current().start()


if __name__ == '__main__':
    run_server()