import React from "react";

export default function (
    {
        loggedIn,
        isEditLogin,
        changeLogin,
        applyNewLogin,
        user,
        handleLogin,
        logout,
        openModal
    }
) {
    return (
        <>
            {loggedIn ? (
                <>
                    {isEditLogin ? (
                        <label className="input input--auth">
                            <input
                                autoFocus
                                type="text"
                                className="input__field"
                                value={user.login}
                                onChange={changeLogin}
                                onBlur={applyNewLogin}
                            />
                        </label>
                    ) : (
                        <span
                            style={{fontWeight: 500}}
                            onClick={handleLogin}
                        >
                            {user.login}
                        </span>
                    )}

                    <button
                        style={{marginLeft: 16}}
                        onClick={logout}
                        type="button"
                        className="btn btn--secondary"
                    >
                        Выйти
                    </button>
                </>
            ) : (
                <button
                    onClick={openModal}
                    type="button"
                    className="btn btn--primary"
                >
                    Войти
                </button>
            )}
        </>
    )
}
