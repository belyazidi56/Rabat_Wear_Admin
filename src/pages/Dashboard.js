import React from 'react';
import { SidebarWithHeader, DashboardCards, OrdersTable } from '../components';
import { useOrderContext } from '../context/order_context';

export default function Dashboard() {
  const { recent_orders } = useOrderContext();
  return (
    <SidebarWithHeader>
      <DashboardCards />
      <OrdersTable orders={recent_orders} />
    </SidebarWithHeader>
  );
}
