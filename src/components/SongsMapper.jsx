import SongPresenter from '../components/SongPresenter'

const SongsMapper = (props) => {
  return (
    <ul>
      {props.songEntries.map((element) => (
        <li>
          <SongPresenter postSong={element} />
        </li>
      ))}
    </ul>
  );
};

export default SongsMapper;
prop;
