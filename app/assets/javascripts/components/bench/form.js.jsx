var BenchForm = React.createClass({
  render: function() {
    return (
      <form>
        <label>
          Latitude
          <input type="text" name="bench[lat]"></input>
        </label>
        <br>
        <label>
          Longitude
          <input type="text" name="bench[lng]"></input>
        </label>
        <br>
        <label>
          Description
          <input type="text" name="bench[description]"></input>
        </label>
        <label>
          Number of spaces
          <input type="text" name="bench[spaces]"></input>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    )
  }
})
