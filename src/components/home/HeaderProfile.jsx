import { useSelector } from 'react-redux'
import AvatarImg from '../general_components/AvatarImg'

const HeaderProfile = () => {
    const userData = useSelector(state => state.userData.user.userData)

    return (
        <AvatarImg
            size={30}
            avatarId={userData.avatar}
        />
    )
}

export default HeaderProfile