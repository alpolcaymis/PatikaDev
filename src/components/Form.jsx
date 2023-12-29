import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const randomId = () => {
  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return generateId();
};

const Form = () => {
  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const id = randomId();
  const [createdAt, setCreatedAt] = useState(null);
  const [status, setStatus] = useState("");

  const onSubmit = (data) => {
    // Form verilerine ID ekleyerek işlemleri gerçekleştir
    const formDataWithId = { id, ...data };

    // Form verilerine createdAt tarihini ekleyerek işlemleri gerçekleştir
    const formDataWithCreatedAt = { ...formDataWithId, createdAt: new Date() };

    // Form verilerine 'status' özelliğini ekleyerek işlemleri gerçekleştir
    const formDataWithStatus = { ...formDataWithCreatedAt, status: status };

    // Form gönderildiğinde yapılacak işlemler
    console.log(formDataWithStatus);

    // Diğer işlemler burada gerçekleştirilebilir, örneğin API'ye gönderme
    // ...

    // createdAt değerini state'i güncelleyerek saklayabilirsiniz
    setCreatedAt(new Date());
    setStatus("Gönderildi");
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Ad</label>
          <input
            className="form-control"
            {...register("ad", { required: "Bu alan zorunlu" })}
          />
          {errors.ad && <span>{errors.ad.message}</span>}
        </div>

        <div className="form-group">
          <label>Soyad</label>
          <input {...register("soyad", { required: "Bu alan zorunlu" })} />
          {errors.soyad && <span>{errors.soyad.message}</span>}
        </div>

        <div className="form-group">
          <label>Yaş</label>
          <input
            type="number"
            {...register("yas", {
              required: "Bu alan zorunlu",
              validate: (value) => {
                const yas = parseInt(value, 10);
                return (
                  (yas > 0 && yas <= 100) ||
                  "Yaş pozitif bir değer olmalı ve 100ü geçmemeli"
                );
              },
            })}
          />
          {errors.yas && <span>{errors.yas.message}</span>}
        </div>

        <div className="form-group">
          <label>TC</label>
          <input
            type="number"
            {...register("tc", {
              required: "Bu alan zorunlu",
              pattern: {
                value: /^[0-9]{11}$/,
                message: "TC Kimlik Numarası 11 haneli rakamlardan oluşmalıdır",
              },
            })}
          />
          <span style={{ color: "red" }}>{errors.tc && errors.tc.message}</span>
        </div>

        <div className="form-group">
          <label>Başvuru Nedeni</label>

          <select
            {...register("basvuruNedeni", { required: "Bu alan zorunlu" })}
          >
            <option value="sanane">sanane</option>
            <option value="canım istedi">canım istedi</option>
            <option value="fakirim">fakirim</option>
            <option value="zengin olucam">zengin olucam</option>
          </select>

          {errors.basvuruNedeni && <span>{errors.basvuruNedeni.message}</span>}
        </div>

        <div className="form-group">
          <label>Adres Bilgisi</label>
          <textarea
            {...register("adresBilgisi", { required: "Bu alan zorunlu" })}
          />
          {errors.adresBilgisi && <span>{errors.adresBilgisi.message}</span>}
        </div>

        <div className="form-group">
          <label>Fotograflar/Ekler</label>
          <input type="file" {...register("fotograflarEkler")} />
          {errors.fotograflarEkler && (
            <span>{errors.fotograflarEkler.message}</span>
          )}
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">
            Gönder
          </button>
        </div>

        {createdAt && (
          <p>Form oluşturulma tarihi: {createdAt.toLocaleString()}</p>
        )}
      </form>
    </section>
  );
};

export default Form;
