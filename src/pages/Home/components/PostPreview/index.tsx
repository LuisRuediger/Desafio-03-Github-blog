import { PostPreviewContainer } from './styles'

export function PostPreview() {
  const postPreview =
    'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in'
  const truncatePost = postPreview.substring(0, 181) + '...'

  return (
    <PostPreviewContainer>
      <li>
        <a href="#">
          <div>
            <h2>JavaScript data types and data structures</h2>
            <span>há 1 dia</span>
          </div>
          <p>{truncatePost}</p>
        </a>
      </li>
      <li>
        <a href="#">
          <div>
            <h2>JavaScript data types and data structures</h2>
            <span>há 1 dia</span>
          </div>
          <p>{truncatePost}</p>
        </a>
      </li>
      <li>
        <a href="#">
          <div>
            <h2>JavaScript data types and data structures</h2>
            <span>há 1 dia</span>
          </div>
          <p>{truncatePost}</p>
        </a>
      </li>
      <li>
        <a href="#">
          <div>
            <h2>JavaScript data types and data structures</h2>
            <span>há 1 dia</span>
          </div>
          <p>{truncatePost}</p>
        </a>
      </li>
    </PostPreviewContainer>
  )
}
