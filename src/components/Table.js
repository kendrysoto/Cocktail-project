import React from 'react';
import { connect } from 'react-redux'
import { fetchUser } from '../redux/AsyncActions';
import higherOrderComponent from './HOC'
import UsePagination from './UsePagination';

function Table({ Data, fetchUser, error, loading, changeColor, color }) {
    return (
        <div>
            <UsePagination
                data={Data}
                loading={loading}
                error={error}
                fetchUser={fetchUser}
                changeColor={changeColor}
                color={color}>
            </UsePagination>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        Data: state.user,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () => dispatch(fetchUser())
    }
}

export default higherOrderComponent(connect(mapStatetoProps, mapDispatchToProps)(Table));

