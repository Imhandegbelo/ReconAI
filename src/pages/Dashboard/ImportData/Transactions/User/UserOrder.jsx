import React from 'react';
import PropTypes from 'prop-types';
import './user.css';

const UserOrder = ({
	name,
	description,
	withdrawals,
	deposit,
	date,
	balance,
}) => {
	<div className="border-bottom border-[#cccccc57] pb-3 flex justify-between">
		<div className="w-[18%] md:w-[12%] mx-[0.5em]">{name}</div>
		<div className="w-[18%] md:w-[12%] mx-[0.5em]">{description}</div>
		<div className="w-[18%] md:w-[12%] mx-[0.5em] text-[#F04438]">{withdrawals}</div>
		<div className="w-[18%] md:w-[12%] mx-[0.5em] text-[#12B76A]">{deposit}</div>
		<div className="w-[18%] md:w-[12%] mx-[0.5em]">{date}</div>
		<div className="order-action">$12,000</div>
	</div>;
};

UserOrder.propType = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	withdrawals: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	balance: PropTypes.string.isRequired,
};

export default UserOrder;
