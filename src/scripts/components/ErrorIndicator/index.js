import React from "react";

export default function ErrorIndicator(error) {
    return (
        <div>
            Что-то пошло не так...
            {error}
        </div>
    )
}