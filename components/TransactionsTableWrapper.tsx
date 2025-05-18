// components/TransactionsTableWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import TransactionsTable from "./TransactionsTable";
import TransactionsTableSkeleton from "./TransactionsTableSkeleton";

const TransactionsTableWrapper = ({
                                      transactions,
                                  }: {
    transactions: Transaction[];
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [displayedTransactions, setDisplayedTransactions] = useState(transactions);

    useEffect(() => {
        setIsLoading(true);

        // Simulate loading effect for smoother UX
        const timeout = setTimeout(() => {
            setDisplayedTransactions(transactions);
            setIsLoading(false);
        }, 400); // adjust for realism

        return () => clearTimeout(timeout);
    }, [transactions]);

    return isLoading ? (
        <TransactionsTableSkeleton />
    ) : (
        <TransactionsTable transactions={displayedTransactions} />
    );
};

export default TransactionsTableWrapper;
