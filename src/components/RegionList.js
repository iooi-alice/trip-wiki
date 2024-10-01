export default function RegionList({ $app, initialState, handleRegion }) {
  this.state = initialState; // region 초기값
  this.handleRegion = handleRegion;

  this.$target = document.createElement('div');
  this.$target.className = 'region-list';
  $app.appendChild(this.$target);

  this.template = () => {
    const regionList = [
      '🚀 All',
      '🌏 Asia',
      '🕌 Middle-East',
      '🇪🇺 Europe',
      '💃 Latin-America',
      '🐘 Africa',
      '🏈 North-America',
      '🏄 Oceania',
    ];

    let temp = ``;

    regionList.forEach((elm) => {
      let regionId = elm.split(' ')[1];
      temp += `<div id=${regionId}>${elm}</div>`;
    });
    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();

    if (this.state) {
      let $currentRegion = document.getElementById(this.state);
      $currentRegion && ($currentRegion.className = 'clicked');
    } else {
      document.getElementById('All').className = 'clicked';
    }

    const regionButtons = document.querySelectorAll('.region-list div');

    regionButtons.forEach((region) => {
      region.addEventListener('click', () => {
        this.handleRegion(region.id);
      });
    });
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
