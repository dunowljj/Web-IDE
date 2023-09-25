import { forwardRef, useState } from "react";
import * as S from "./PasswordInput.style";
import * as Icon from "../../../../components/Icon";

interface Props {
  placeholder: string;
}

const PasswordInput = forwardRef(function PasswordInput(
  { placeholder }: Props,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <S.PasswordBox>
      {show ? (
        <S.ShowPassword
          placeholder={placeholder}
          value={value}
          onChange={handlePassword}
          minLength={8}
          maxLength={30}
          ref={ref}
        />
      ) : (
        <S.Password
          placeholder={placeholder}
          type="password"
          value={value}
          onChange={handlePassword}
          minLength={8}
          maxLength={30}
          ref={ref}
        />
      )}

      <S.IconWrapper onClick={handleShow}>
        {show ? (
          <S.IconBox>
            <Icon.EyeOn />
          </S.IconBox>
        ) : (
          <S.IconBox>
            <Icon.EyeOff />
          </S.IconBox>
        )}
      </S.IconWrapper>
    </S.PasswordBox>
  );
});
export default PasswordInput;