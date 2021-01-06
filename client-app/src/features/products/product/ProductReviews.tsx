import { observer } from "mobx-react-lite";
import React, {
  FormEvent,
  Fragment,
  useContext,
  useEffect,
  useState,
} from "react";
import { ICommentFormValues } from "../../../app/models/product";
import { RootStoreContext } from "../../../app/stores/rootStore";

const ProductReviews = () => {
  var rootStore = useContext(RootStoreContext);
  var {
    product,
    addComment,
    createHubConnection,
    stopHubConnection,
  } = rootStore.productStore;

  useEffect(() => {
    createHubConnection(product!.id.toString());
    return () => {
      stopHubConnection();
    };
  }, [createHubConnection, stopHubConnection]);

  const initalizeFormState = () => {
    return {
      body: "",
    };
  };

  const clearFormState = () => {
    return {
      body: "",
    };
  };

  const [commentBody, setCommentBody] = useState<ICommentFormValues>(
    initalizeFormState
  );

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    // validate;
    setCommentBody({ ...commentBody, [name]: value });
    // console.log(commentBody);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setCommentBody(clearFormState);

    // commentBody.createdAt = Date.now();

    addComment(commentBody).catch((err) => {
      console.log(err.response);
    });
  };

  return (
    <Fragment>
      <div className='reviews'>
        <h2>Ostavite komentar na proizvod: </h2>
        {product &&
          product.comments &&
          product.comments.map((comment) => (
            <div className='comment' key={comment.id}>
              <div className='upper'>
                <img src='/assets/user.jpg' alt='' />
                <div className='desc'>
                  <p>{comment.username}</p>
                  <p className='small-date'>
                    {new Date(comment.createdAt).toDateString()}
                  </p>
                </div>
              </div>
              <div className='down'>
                <p>{comment.body}</p>
              </div>
            </div>
          ))}
      </div>
      <form className='form-comment' onSubmit={handleSubmit}>
        <textarea
          placeholder='Ostavite komentar...'
          onChange={handleInputChange}
          name='body'
          required
        ></textarea>
        <button type='submit' className='submit-button'>
          Potvrdi
        </button>
      </form>
    </Fragment>
  );
};

export default observer(ProductReviews);
