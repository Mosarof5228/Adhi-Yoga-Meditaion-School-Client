import { Link } from 'react-router-dom';




const NotFoundPage = () => {
    return (
        <div
            className="flex flex-col items-center justify-center bg-pink-400 "
            style={{
                background: 'linear-gradient(to bottom right, #4F46E5, #2E8AE6)',
                backgroundImage: `url('/path/to/background-image.jpg')`,
                backgroundSize: 'cover',
            }}
        >
            <h1 className="text-6xl font-bold text-white mb-4">Oops!</h1>
            <p className="text-3xl text-red-700 text-7xl font-bold mb-8">The page does not exist.!!!!!</p>
            <div className="flex space-x-4">
                <div className="animate-pulse">
                    <div className="rounded-full overflow-hidden">
                        <img
                            src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=626&ext=jpg&ga=GA1.2.871888304.1683181684&semt=sph"
                            alt="Image 1"
                            className="w-64 h-64 object-cover transform hover:rotate-12 transition duration-300"
                        />
                    </div>
                </div>
                <div className="animate-pulse">
                    <div className="rounded-full overflow-hidden">
                        <img
                            src="https://previews.123rf.com/images/tigatelu/tigatelu1411/tigatelu141100058/33887322-cartoon-emoticon-holding-a-magnifying-glass.jpg"
                            alt="Image 2"
                            className="w-64 h-64 object-cover transform hover:-rotate-12 transition duration-300"
                        />
                    </div>
                </div>
            </div>
            <p className="text-gray-300 mt-8">
                Back to{' '}
                <Link to="/" className="text-blue-400 hover:underline">
                    Home
                </Link>
            </p>
        </div>
    );
};

export default NotFoundPage;