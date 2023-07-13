import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinksContainer, ProfileContainer } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/luisruediger.png" alt="" />
      <div>
        <header>
          <h1>Luis Ruediger</h1>
          <a href="#">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <LinksContainer>
          <a href="#">
            <FontAwesomeIcon icon={faGithub} />
            luisruediger
          </a>

          <a href="#">
            <FontAwesomeIcon icon={faBuilding} />
            Freelancer
          </a>

          <a href="#">
            <FontAwesomeIcon icon={faUserGroup} />
            32 Seguidores
          </a>
        </LinksContainer>
      </div>
    </ProfileContainer>
  )
}
