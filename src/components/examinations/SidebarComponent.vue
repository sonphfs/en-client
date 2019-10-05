<template>
  <div class="col-md-3 grid-margin stretch-card">
    <div class="card" style="max-height: 345px;">
      <div class="card-body d-flex flex-column">
        <div class="chartjs-size-monitor">
          <div class="chartjs-size-monitor-expand">
            <div></div>
          </div>
          <div class="chartjs-size-monitor-shrink">
            <div></div>
          </div>
        </div>
        <div class="wrapper">
          <h4 class="card-title mb-0">PART NAVIGATION</h4>
          <p></p>
          <nav aria-label="...">
            <ul class="pagination pagination-lg">
              <li class="page-item">
                <a href="toeic_part_1.html" tabindex="-1" class="page-link">1</a>
              </li>
              <li class="page-item disabled">
                <a href="toeic_part_2.html" class="page-link">2</a>
              </li>
              <li class="page-item">
                <a href="toeic_part_3.html" class="page-link">3</a>
              </li>
              <li class="page-item">
                <a href="toeic_part_4.html" class="page-link">4</a>
              </li>
            </ul>
          </nav>
          <nav aria-label="...">
            <ul class="pagination pagination-lg">
              <li class="page-item">
                <a href="toeic_part_5.html" class="page-link">5</a>
              </li>
              <li class="page-item">
                <a href="toeic_part_6.html" class="page-link">6</a>
              </li>
              <li class="page-item">
                <a href="toeic_part_7.html" class="page-link">7</a>
              </li>
            </ul>
          </nav>
          <div id="net-profit-legend" class="mb-4">
            <div class="chartjs-legend">
              <ul>
                <li>
                  <span style="background-color: rgba(88, 208, 222, 0.8);"></span>Todo
                </li>
              </ul>
            </div>
            <p></p>
            <p>Time left: 1:30:15s</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent"
};
</script>