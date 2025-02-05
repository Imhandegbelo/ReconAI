import {Link} from 'react-router-dom';
import { FaGreaterThan } from 'react-icons/fa';
import DashBoardSideBar from '../components/DashBoardSideBar';
import DashBoardHeader from '../components/DashBoardHeader';
import ScrollToTop from '../components/ScrollToTop';

const styles = {
	bgColor: '#1570EF',
	titleTextColor: '#101828',
	inputwidth: '500px',
	sideWidth: '248px',
	dasboardwidth: '150px',
};
const processData = {
	status: 'Processing...',
	statusHeader: 'Maching data...',
	statusMessage: 'imbalancing (s) found so far',
	numberOfimbalance: 0,
};

const ErrorProcessing = () => (
	<>
		<ScrollToTop />
		<DashBoardHeader />
		<div className="dashboard-main-cont">
			<DashBoardSideBar />
			<main className="">
				<div className="breadcrum text-[#667085] mb-4">
					Dashboard &gt; Upload{' '}
				</div>
				<h1 className="font-bold text-2xl">{processData.status}</h1>
				<p className="text-[#667085] pb-2">
					Our system is currently reconciling your records and will alert you of
					any errors. Please be patient.{' '}
				</p>
				<div className="center">
					<div className="process-card p-10 mt-2">
						<h1 className="font-bold text-base">{processData.statusHeader}</h1>
						<p className="">
							<span className="numberOfErrors">
								{processData.numberOfimbalance}
							</span>
							{processData.statusMessage}
						</p>

						<div className="w-full bg-gray-200 rounded-full h-5 mt-2 dark:bg-gray-700">
							<div className="bg-blue-600 h-5 rounded-full w-10"> </div>
						</div>
					</div>
					<Link
						to="/processingerror"
						className="flex items-center p-2 mt-3 sm:mx-auto rounded bg-[#1570EF] text-white"
					>
						cancel
					</Link>
				</div>
			</main>
		</div>
	</>
);

export default ErrorProcessing;
