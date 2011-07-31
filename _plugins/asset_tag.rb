class AssetTag < Liquid::Tag
  CONFIG = YAML.load_file("_assets.yml")
  
  def initialize(tag_name, name, kind, tokens)
    super tag_name, name, tokens
    @name   = name.to_s.strip
    @kind   = kind.to_s
  end

  def render(context)
    if Jekyll::ENV == 'production'
      markup "/assets/#{name_with_ext}"
    else
      (assets_for_name.map do |asset|
        markup "#{@path}/#{asset}"
      end).join("\n")
    end
  end
  
  def name_with_ext
    "#{@name}.#{@ext}"
  end
  
  def assets_for_name
    if CONFIG[@asset_type].include?(@name)
      CONFIG[@asset_type][@name].map do |asset|
        asset.gsub(/_site\/(style|js)\//, '')
      end
    else
      name_with_ext
    end
  end
end

class IncludeJsTag < AssetTag
  def initialize(tag_name, name, tokens)
    @path = '/js'
    @ext = 'js'
    @asset_type = 'javascripts'
    super tag_name, name, 'js', tokens
  end
  
  def markup(src)
    %{<script src='#{src}'></script>}.to_s
  end  
end

Liquid::Template.register_tag('include_js', IncludeJsTag)

class IncludeCssTag < AssetTag
  def initialize(tag_name, name, tokens)
    @path = '/style'
    @ext = 'css'
    @asset_type = 'stylesheets'
    super tag_name, name, 'css', tokens
  end

  def markup(src)
    %{<link href='#{src}' rel="stylesheet" media="all">}.to_s
  end
end

Liquid::Template.register_tag('include_css', IncludeCssTag)
