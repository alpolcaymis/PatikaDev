import { useForm, Controller } from "react-hook-form";
import { useCartContext } from "../context/cart-context";

const randomId = () => {
  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return generateId();
};

const Form = () => {
  const { tickets } = useCartContext();
  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const id = randomId();

  const onSubmit = (data) => {
    const formDataWithId = { id, ...data };

    const formDataWithCreatedAt = { ...formDataWithId, createdAt: new Date() };

    const formDataWithStatus = { ...formDataWithCreatedAt, status: "new" };

    const ticketObject = formDataWithStatus;

    console.log(ticketObject);

    tickets.push(ticketObject);

    // Diğer işlemler burada gerçekleştirilebilir, örneğin API'ye gönderme
    // ...
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            {...register("name", { required: "Bu alan zorunlu" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div className="form-group">
          <label>Surname</label>
          <input {...register("surname", { required: "Bu alan zorunlu" })} />
          {errors.surname && <span>{errors.surname.message}</span>}
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            {...register("age", {
              required: "Bu alan zorunlu",
              validate: (value) => {
                const age = parseInt(value, 10);
                return (
                  (age > 0 && age <= 100) ||
                  "Yaş pozitif bir değer olmalı ve 100ü geçmemeli"
                );
              },
            })}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>

        <div className="form-group">
          <label>TC Kimlik Numarası</label>
          <input
            type="number"
            {...register("tcNo", {
              required: "Bu alan zorunlu",
              pattern: {
                value: /^[0-9]{11}$/,
                message:
                  "T.C. Kimlik Numarası 11 haneli rakamlardan oluşmalıdır",
              },
            })}
          />
          <span style={{ color: "red" }}>
            {errors.tcNo && errors.tcNo.message}
          </span>
        </div>

        <div className="form-group">
          <label>Reason for</label>

          <select {...register("reason", { required: "Bu alan zorunlu" })}>
            <option value="sanane">sanane</option>
            <option value="canım istedi">canım istedi</option>
            <option value="fakirim">fakirim</option>
            <option value="zengin olucam">zengin olucam</option>
          </select>

          {errors.reason && <span>{errors.reason.message}</span>}
        </div>

        <div className="form-group">
          <label>Adres Bilgisi</label>
          <textarea {...register("address", { required: "Bu alan zorunlu" })} />
          {errors.address && <span>{errors.address.message}</span>}
        </div>

        <div className="form-group">
          <label>Fotograflar/Ekler</label>
          <input type="file" {...register("photoAttach")} />
          {errors.photoAttach && <span>{errors.photoAttach.message}</span>}
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">
            Gönder
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
