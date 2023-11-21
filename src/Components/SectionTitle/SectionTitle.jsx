import PropTypes from 'prop-types'

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center my-10'>
            <p className='text-[#D99904] mb-4 italic'>--- {subHeading} ---</p>
            <h1 className='uppercase text-4xl border-y-4 py-5 max-w-md mx-auto'>{heading}</h1>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
}

export default SectionTitle;