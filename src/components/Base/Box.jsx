import PropTypes from 'prop-types'

const Box = ({ title, children }) => {
  return (
    <div className="bg-gray-50 border border-gray-300 dark:bg-gray-800 dark:border-gray-600 p-5 rounded-lg">
      <p className='text-lg font-bold text-center text-gray-900 dark:text-gray-400 mb-2'>{title}</p>
      <div>
        {children}
      </div>
    </div>
  )
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Box;