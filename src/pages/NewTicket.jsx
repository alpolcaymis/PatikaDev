import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

function NewTicket() {
  if (false) {
    return <Spinner />;
  }

  return (
    <>
      <BackButton url="/" />
      <section className="heading">
        <h1>Create New Ticket</h1>
        <p>Please fill out the form below</p>
      </section>
      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Customer Name</label>
          <input type="text" className="form-control" disabled />
        </div>
        <div className="form-group">
          <label htmlFor="name">Customer Email</label>
          <input type="text" className="form-control" disabled />
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="product">Product</label>
            <select name="product" id="product">
              <option value="iPhone">iPhone</option>
              <option value="Macbook Pro">Macbook Pro</option>
              <option value="iMac">iMac</option>
              <option value="iPad">iPad</option>
            </select>
            <div className="form-group">
              <label htmlFor="description">Description of the issue</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                placeholder="Description"
              ></textarea>
              <div className="form-group">
                <button className="btn btn-block">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default NewTicket;
