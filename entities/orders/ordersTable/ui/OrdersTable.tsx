import { FC } from 'react';
import Button from '../../../../shared/ui/button';

const OrdersTable: FC = () => {
    return <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
            <thead>
                <tr>
                    <th>Номер заказа</th>
                    <th>E-Mail</th>
                    <th>Магазин</th>
                    <th>Сумма оплаты</th>
                    <th>Дата оплаты</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>848914</th>
                    <td><a href="mailto:me@example.com">me@example.com</a></td>
                    <td>ValorantBest</td>
                    <td>1 300 ₽</td>
                    <td>23.03.23 в 18:52</td>

                    <td>
                        <Button
                            className="btn-sm"
                            variant="primary"
                            text="Подтвердить оплату"
                        />
                    </td>
                </tr>

                <tr>
                    <th>848914</th>
                    <td><a href="mailto:me@example.com">someverybigemail@example.com</a></td>
                    <td>ValorantBest</td>
                    <td>1 300 ₽</td>
                    <td>23.03.23 в 18:52</td>

                    <td>
                        <p className=" uppercase text-sm font-semibold">Оплата подтверждена</p>
                    </td>
                </tr>

                <tr>
                    <th>848914</th>
                    <td><a href="mailto:me@example.com">me@example.com</a></td>
                    <td>ValorantBest</td>
                    <td>1 300 ₽</td>
                    <td>23.03.23 в 18:52</td>

                    <td>
                        <p className=" uppercase text-sm font-semibold">Оплата подтверждена</p>
                    </td>
                </tr>

                <tr>
                    <th>848914</th>
                    <td><a href="mailto:me@example.com">me@example.com</a></td>
                    <td>ValorantBest</td>
                    <td>1 300 ₽</td>
                    <td>23.03.23 в 18:52</td>

                    <td>
                        <p className=" uppercase text-sm font-semibold">Оплата подтверждена</p>
                    </td>
                </tr>

                <tr>
                    <th>848914</th>
                    <td><a href="mailto:me@example.com">me@example.com</a></td>
                    <td>ValorantBest</td>
                    <td>1 300 ₽</td>
                    <td>23.03.23 в 18:52</td>

                    <td>
                        <Button
                            className="btn-sm"
                            variant="primary"
                            text="Подтвердить оплату"
                        />
                    </td>
                </tr>

                <tr>
                    <th>848914</th>
                    <td><a href="mailto:me@example.com">me@example.com</a></td>
                    <td>ValorantBest</td>
                    <td>1 300 ₽</td>
                    <td>23.03.23 в 18:52</td>

                    <td>
                        <p className=" uppercase text-sm font-semibold">Оплата подтверждена</p>
                    </td>
                </tr>

                <tr>
                    <th>848914</th>
                    <td><a href="mailto:me@example.com">me@example.com</a></td>
                    <td>ValorantBest</td>
                    <td>1 300 ₽</td>
                    <td>23.03.23 в 18:52</td>

                    <td>
                        <p className=" uppercase text-sm font-semibold">Оплата подтверждена</p>
                    </td>
                </tr>

                <tr>
                    <th>848914</th>
                    <td><a href="mailto:me@example.com">me@example.com</a></td>
                    <td>ValorantBest</td>
                    <td>1 300 ₽</td>
                    <td>23.03.23 в 18:52</td>

                    <td>
                        <p className=" uppercase text-sm font-semibold">Оплата подтверждена</p>
                    </td>
                </tr>

                <tr>
                    <th>848914</th>
                    <td><a href="mailto:me@example.com">me@example.com</a></td>
                    <td>ValorantBest</td>
                    <td>1 300 ₽</td>
                    <td>23.03.23 в 18:52</td>

                    <td>
                        <p className=" uppercase text-sm font-semibold">Оплата подтверждена</p>
                    </td>
                </tr>

                <tr>
                    <th>848914</th>
                    <td><a href="mailto:me@example.com">me@example.com</a></td>
                    <td>ValorantBest</td>
                    <td>1 300 ₽</td>
                    <td>23.03.23 в 18:52</td>

                    <td>
                        <p className=" uppercase text-sm font-semibold">Оплата подтверждена</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
};

export default OrdersTable;