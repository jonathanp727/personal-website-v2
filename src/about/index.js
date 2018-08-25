import React from 'react';

import styles from './style.css';

const About = () => (
  <div>
    <div className={styles.introCont}>
      <h1 className={styles.hi}>Hi I'm</h1>
      <h1 className={styles.name}>Jonathan Phipps</h1>
    </div>
    <div className={styles.desc}>
      <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at neque dolor. Sed at magna augue. Fusce interdum pellentesque auctor. Nullam pharetra nibh eu leo sodales, nec bibendum quam posuere. Integer non purus faucibus, placerat enim vitae, vehicula eros. Vivamus viverra posuere magna a fringilla. Nunc accumsan enim auctor pretium volutpat.
      </p>
      <p className={styles.para}>Vestibulum ante enim, ultricies eu molestie quis, bibendum eget sem. Maecenas ac augue metus. Donec facilisis non nulla eu pretium. Mauris in placerat dui. In ac nunc ac augue aliquam eleifend in a ante. Donec metus velit, varius at enim ac, tincidunt vehicula nisl. Duis vitae posuere dui. Sed vitae ultrices lacus, nec ornare risus. Phasellus hendrerit porta massa vehicula pharetra. Etiam feugiat nulla ut enim congue elementum. Integer pulvinar ornare ante, ac pulvinar libero semper sodales. Vivamus vulputate consequat tempus. Integer commodo congue ex, at fermentum erat aliquet vel. Curabitur ut quam lobortis, interdum elit et, sollicitudin velit. Nam porta euismod lobortis.
      </p>
    </div>
  </div>
)

export default About;
