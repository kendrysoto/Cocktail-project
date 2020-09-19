import React, { useState } from "react";


const UsePagination = (data) => {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.data.length / 5);

    function currentData() {
        const begin = (currentPage - 1) * 5;
        const end = begin + 5;
        return data.data.slice(begin, end);
    }

    function next() {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    }

    function prev() {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    }

    if (data.error) {
        return (
            <div className="container">
                <h6>Hubo un error encontrando los usuarios.</h6>
            </div>
        );
    }
    if (data.loading) {
        return (
            <div className="container">
                <h6>Cargando...</h6>
            </div>
        );
    }
    return (
        <div>
            <div style={{ backgroundColor: data.color }} className="jumbotron jumbotron-fluid">
                <div className="container">
                    <p className="display-4">Table users</p>
                </div>
            </div>
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr className="table-active">
                            <th style={{ backgroundColor: data.color }} scope="col">ID</th>
                            <th style={{ backgroundColor: data.color }} scope="col">NAME</th>
                            <th style={{ backgroundColor: data.color }} scope="col">EMAIL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData().map(user => (
                            <tr key={user.id}>
                                <th className="table-light" scope="row">{user.id}</th>
                                <td className="table-light">{user.name}</td>
                                <td className="table-light">{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="col-lg-12">
                <div class="text-center">
                    <button
                        disabled={currentData().length != 0}
                        type="button" className="btn btn-secondary"
                        onClick={() => {
                            data.fetchUser()
                        }}>
                        Get user
                    </button>{"   "}
                    <button
                        type="button" className="btn btn-secondary"
                        onClick={data.changeColor}>
                        Change color
                    </button>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <button
                            disabled={currentData().length == 0}
                            className="btn btn-primary float-left"
                            onClick={prev}>
                            <i class="fas fa-arrow-left">
                            </i>
                        </button>
                        <button
                            disabled={currentData().length == 0}
                            className="btn btn-primary float-right"
                            onClick={next}>
                            <i class="fas fa-arrow-right">
                            </i>
                        </button>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default UsePagination;