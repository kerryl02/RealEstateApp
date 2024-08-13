import UserNavbar from '../components/UserNavbar';
import UserRecherche from '../components/Sections/UserRecherche';
import UserProperty from '../components/Sections/UserProperty';
import UserDestination from '../components/Sections/UserDestination';
import UserSpecial from '../components/Sections/UserSpecial';
import UserFaq from '../components/Sections/UserFaq';
import UserCta from '../components/Sections/UserCta';

const UserPage = () => {

    return (
        <div>
            <UserNavbar />
            <section className="relative flex justify-center bg-gray-100">
                <UserRecherche />
            </section>
            <section className="relative flex justify-center ">
                <UserProperty />
            </section>
            <section className="relative flex justify-center ">
                <UserDestination />
            </section>
            <section className="relative flex justify-center ">
                <UserSpecial />
            </section>
            <section className="relative flex justify-center ">
                <UserFaq />
            </section>
            <section className="relative flex justify-center ">
                <UserCta />
            </section>
            
        </div>
    );
};

export default UserPage;
