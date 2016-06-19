(defn categories-ui []
  [view {:style (c :fit {:background-color "#2F93FF"})}
   [scroll {:content-inset {:bottom 90}
            :content-container-style {:padding-top 15}
            :style (c :bg-transparent :p15 :pt20 :fit)}
    [view
     [touchable-highlight {:style (c :bg-lightestgrey :p10 :mb20)
                           :on-press (fn []
                                       (clear-search!)
                                       (ui.m/event! [:navigate! (str "/search")]))
                           :underlay-color (colours "lightergrey")}
      [view {:style (c :f-row)}
       [text {:style (c :futura :lightgrey :fit :t16)
              :number-of-lines 1} (translate :search/placeholder)]
       [image {:style {:height 20}
               :source img/small-loupe}]]]

     [touchable-opacity {:on-press #(ui.m/event! [:navigate! (str "/brands")])
                         :style (c :pb25)}
      [view {:style (c :f-row)}
       [text {:style (c :white :futura :t18)}
        (.toUpperCase
         (translate :category/brands))]
       [image {:style (c :ml5 {:top 5 :tint-color "#fff"})
               :source img/arrow-big-right}]]]
     (for [[category sub-categories] cats]
       ^{:key category} [category-ui category sub-categories])]]])
