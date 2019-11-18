import React from 'react';
import MoneyTable from './MoneyTable/MoneyTable'
import MoneyTable2 from './MoneyTable/MoneyTable2'
export default class MoneyDetail extends React.Component {
    render() {
        return (
            <div className="MoneyDetail_content">
                <h2>交费情况</h2>
                <div className="Money_top">
                    <MoneyTable />
                </div>
                <h2>退费情况</h2>
                <div className="Money_bottom">
                    <MoneyTable2 />
                </div>
            </div>
        )
    }
}