pragma solidity ^0.4.24;
pragma experimental ABIEncoderV2;


contract PharmaTrust {
    struct Event {
        string name;
        string place;
        string isotime;
        address company;
        string comment;
    }

    struct Product {
        string name;
        address company;
    }

    mapping(address => string) private companies;
    mapping(bytes32 => Product) private products;
    mapping(bytes32 => Event[]) private events;

    function registerCompany(string name) public {
        address sender = msg.sender;
        companies[sender] = name;
    }

    function getCompany(address addr) public view returns (string) {
        return companies[addr];
    }

    function registerProduct(string sku, string productName, string place, string isotime, string comment) public {
        address sender = msg.sender;
        // if (a!=0) {
        //     Log('a', a);
        //     return;
        // }
        // npm i decode-eth
        require(bytes(companies[sender]).length != 0, "Company not found");
        require(bytes(products[sha256(sku)].name).length == 0, "Product already exists");
        products[sha256(sku)] = Product(productName, sender);
        events[sha256(sku)].push(Event(string(abi.encodePacked("Manufactured ", productName)), place, isotime, sender, comment));
    }

    function recordEvent(string sku, string name, string place, string isotime, string comment) public {
        address sender = msg.sender;
        events[sha256(sku)].push(Event(name, place, isotime, sender, comment));
    }

    function readEvents(string sku) public view returns (Event[]) {
        return events[sha256(sku)];
    }

    // event Log(string v, uint value);
    // event LogAddress(string v, address value);
}
