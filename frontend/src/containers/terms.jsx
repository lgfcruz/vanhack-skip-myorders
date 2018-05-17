import React, {Component} from 'react'

import Content from '../components/content'

export default class Terms extends Component {
  render() {
    return (
      <div className="legal">
        <Content.Header title="Terms of Service" />
        <Content>
          <h2>MyOrders Skip Services Inc.</h2>
          <article className="text-uppercase">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel feugiat dolor. Integer sodales blandit enim id rhoncus. Nunc auctor tempus diam, 
            quis porttitor ipsum tristique id. Suspendisse tristique vestibulum varius. Aliquam mi orci, mollis id lectus ac, faucibus ornare sem. Quisque sapien 
            velit, tempus in posuere quis, mattis eleifend nibh. Cras sollicitudin scelerisque risus vitae eleifend. Ut lobortis metus eu nisi congue molestie. 
            Integer suscipit nibh nec est mattis cursus. Fusce est erat, tempor non ullamcorper vel, egestas a arcu. Phasellus lacinia leo quam, eget finibus 
            nulla varius at.
          </article>
          <article className="text-uppercase">
            Pellentesque sit amet sapien odio. In sodales lobortis dolor, nec malesuada urna mattis vitae. Phasellus pulvinar vel urna a bibendum. Interdum et 
            malesuada fames ac ante ipsum primis in faucibus. Aenean at arcu eget nunc facilisis vehicula nec sit amet erat. Pellentesque congue, lectus nec 
            tristique aliquam, erat sem cursus mauris, a tempor lectus velit id nibh. Donec mollis varius nisi, eu tempor sem porta in. Donec non lacinia purus. 
            Ut sit amet quam nec eros ornare dapibus. Aliquam venenatis tincidunt augue et congue. Etiam commodo leo vitae eros porta hendrerit vel pulvinar purus. 
            Fusce blandit enim nec euismod porta. Nam neque turpis, consequat ac mauris ut, commodo porttitor ante. Nam tristique quam non euismod luctus. 
            Ut gravida semper ante, eu suscipit tortor volutpat eget.
          </article>
          <article className="text-uppercase">
            Aenean eu tincidunt velit, in auctor ligula. Phasellus condimentum ultricies euismod. Sed orci turpis, tempor vel vulputate vel, tempor id nisl. Duis 
            pellentesque eleifend sapien eu sollicitudin. Vestibulum vulputate mi quis purus hendrerit, ut facilisis nisl finibus. Vestibulum cursus suscipit nulla, 
            vel consequat odio maximus at. Praesent eu mollis arcu, id congue lacus. Sed fermentum est quis tortor lacinia, at venenatis metus tristique. Nulla 
            dignissim lacus at rhoncus mattis. Quisque vitae aliquam nunc. Phasellus porta massa a nunc molestie tincidunt. Donec dolor sem, convallis nec lacinia 
            nec, faucibus vitae mauris. In ullamcorper neque sapien, vel convallis ante blandit vitae. Pellentesque neque urna, lacinia quis ultrices quis, 
            vulputate eget magna.
          </article>
          <ol className="list-number-styled">
              <li>
                <h3 className="legal-title">Quisque felis enim</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum orci leo, ut dignissim augue gravida pharetra. Praesent hendrerit, felis 
                non lacinia sagittis, libero metus vulputate dolor, ut venenatis nisl nisl at urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
                posuere cubilia Curae; Aenean convallis odio risus, a rutrum tortor viverra vitae. Praesent at suscipit ex, id egestas enim. Mauris elementum nisl 
                vitae augue ornare, sit amet malesuada metus iaculis. Quisque tincidunt eget ligula a commodo. Nam vulputate ut orci sed bibendum. Suspendisse eu 
                volutpat eros. Etiam malesuada vestibulum enim, vel cursus nisi aliquam ut. Donec pulvinar cursus tempus.
              </li>
              <li>
                <h3 className="legal-title">Sed ultrices velit a arcu feugiat fringilla</h3>
                Nam blandit cursus nisi non aliquet. Nulla facilisi. Ut tristique diam urna, sed bibendum velit sodales lobortis. Vestibulum eu justo gravida, 
                rutrum turpis id, facilisis dolor. Nam euismod odio in ante ultricies, id gravida augue ultrices. In a neque nec nisi pretium eleifend sit amet 
                ut justo. Praesent at nisl nec risus ultricies porttitor. Donec tortor nunc, faucibus non leo in, vestibulum mattis magna. Mauris blandit mi in 
                lorem porttitor interdum. Ut laoreet feugiat elit, nec lacinia lorem. Pellentesque fringilla erat vitae purus tincidunt tempus. Curabitur elit tortor, 
                accumsan vitae turpis a, feugiat elementum dui. Nunc tincidunt efficitur nibh, quis volutpat nibh consequat id. Maecenas egestas luctus tellus, 
                quis varius turpis lobortis sed.
              </li>
              <li>
                <h3 className="legal-title">Phasellus tristique lacinia libero ac feugiat</h3>
                Nullam et ligula ut elit aliquam varius. Fusce leo metus, aliquet vel sollicitudin sit amet, condimentum vitae ligula. Aliquam erat volutpat. 
                Mauris a ante blandit, tempor ante vel, blandit dui. Duis ornare non neque ac feugiat. Nulla sit amet lorem nulla. Pellentesque tincidunt hendrerit 
                augue, quis venenatis metus luctus eleifend. Morbi mattis nisl vitae nulla iaculis mattis. Etiam bibendum ligula sit amet ipsum ultricies, 
                non suscipit elit posuere.
              </li>
          </ol>
        </Content>
      </div>
    )
  }
}