import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor() {
   
   }

  ngOnInit(): void {

    $(document).ready(function(){
      $('.info-list li').on('click',function (){

        $(this).addClass('selected').siblings('li').removeClass('selected');
      
        window.console.log($(this).data('class'));
      
        $('.info-content div').hide();
      
        $('.'+$(this).data('class')).fadeIn('slow');
        
          });

         
  });
  }

  
}
