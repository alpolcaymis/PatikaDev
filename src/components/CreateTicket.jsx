import { useForm } from "react-hook-form";

import { useState, useEffect, useRef } from "react";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useCartContext } from "../context/cart-context";

const CreateTicket = () => {
  const { setLastCreatedTicketId, lastCreatedTicketId } = useCartContext();

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const formDataCopy = {
      ...data,
      // imgUrls,
      images: [],
      note: "empty note",
      status: "new",
      timestamp: serverTimestamp(),
    };
    console.log(formDataCopy);
    const docRef = await addDoc(collection(db, "tickets"), formDataCopy);
    setLoading(false);
    toast.success("Başvuru Başarıyla Gönderildi");
    // navigate(`/ticket/${docRef.id}`);
    navigate(`/ticket-success`);
    setLastCreatedTicketId(docRef.id);
    console.log(lastCreatedTicketId);
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
            <option value="iş">iş</option>
            <option value="kariyer">kariyer</option>
            <option value="network">network</option>
            <option value="girişim">girişim</option>
          </select>

          {errors.reason && <span>{errors.reason.message}</span>}
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea {...register("address", { required: "Bu alan zorunlu" })} />
          {errors.address && <span>{errors.address.message}</span>}
        </div>

        <div className="form-group">
          <label>Fotograflar/Ekler</label>
          <input type="file" {...register("images")} />
          {errors.images && <span>{errors.images.message}</span>}
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

export default CreateTicket;
