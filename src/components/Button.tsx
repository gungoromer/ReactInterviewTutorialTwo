import React from 'react'

interface Props {
    text: string;
}

const Button = ({ text }: Props) => {

    const onBtnClick = (btnText: string) => {
        console.log(btnText);
    }

    return (
        <div>
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => onBtnClick(text)}>
                {text}
            </button>
        </div>
    )
}

export default Button