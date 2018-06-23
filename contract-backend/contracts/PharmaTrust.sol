pragma solidity ^0.4.22;
pragma experimental ABIEncoderV2;


contract PharmaTrust {
    struct Event {
        string name;
        address initiator;
        string notes;
    }

    mapping(bytes32 => Event[]) private eventMappings;

    function recordEvent(string sku, string name, string notes) public {
        address sender = msg.sender;
        bytes32 hash = sha256(sku);
        eventMappings[hash].push(Event(name, sender, notes));
    }

    function readEvents(string sku) public view returns (Event[]) {
        return eventMappings[sha256(sku)];
    }
}
