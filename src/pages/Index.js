

function Record(props) {
  return (
    <tr>
      <td>{props.timestamp}</td>
      <td>{props.event}</td>
      <td>{props.place}</td>
      <td>{props.company}</td>
      <td>{props.comments}</td>
    </tr>
  );
}

function Table() {
  return (
    <section>
      <h1>Blockchain Record: Brain Capacity Enhancer</h1>
      <h2>ID: 8J9fjqweIl98jAfl09</h2>
      <div class="tbl-header">
        <table cellpadding="0" cellspacing="0" border="0">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Event</th>
              <th>Place</th>
              <th>Company</th>
              <th>Comments</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="tbl-content">
        <table cellpadding="0" cellspacing="0" border="0">
          <tbody>
            <Record timestamp="1529822010" event="Manufactured" company="TrustedManufacturer" place="London" comments="ready for transport"/>
            <Record timestamp="1529842010" event="Transport" company="DHL" place="London" comments="plane to Hamburg"/>
            <Record timestamp="1529845010" event="Transport" company="DHL" place="Hamburg" comments="sorting center"/>
            <Record timestamp="1529847011" event="Transport" company="DHL" place="Hamburg" comments="van to Prague"/>
            <Record timestamp="1529947512" event="Delivered" company="DHL" place="Prague" comments="delivered to HackPrague 2018"/>

          </tbody>
        </table>
      </div>
    </section>
  )
}

