const PharmaTrust = artifacts.require("PharmaTrust");

contract('PharmaTrust', (accounts) => {
  it("insert an event", async () => {
    let pharma_trust = await PharmaTrust.deployed();

    await pharma_trust.recordEvent.call("123", "Test drug created", "Some notes");
    console.log(await pharma_trust.readEvents.call("123"));
  });
});
