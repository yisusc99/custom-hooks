import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    // {
    //     username: '',
    //     email: '',
    //     password: ''
    //   }
    const [formState, setFormState] = useState( initialForm )
  
      const onInputsChange  = ({target}) => {
          const { name, value } = target;
          setFormState({
            ...formState,
            [ name ]: value
  
          });
      };
  
      const onClickReset  = ( ) => {
        setFormState(initialForm);
    };

    return {
        ...formState,
        formState,
        onInputsChange,
        onClickReset
    }

}
