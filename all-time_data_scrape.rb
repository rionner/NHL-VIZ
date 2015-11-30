require "nokogiri" # for single pages (use mechanize for multiple pages)
require "open-uri"
require 'json'


global_data = (1997..2015).map do |year|

  year1 = year
  year2 = year.to_i + 1

  # all teams regular season
  url = "http://blackhawks.nhl.com/club/teamstatscomparison.htm?season=#{year1}#{year2}&gameType=2"

  # all teams playoffs
  # url = 'http://blackhawks.nhl.com/club/teamstatscomparison.htm?season=#{year1}#{year2}&gameType=3'

  puts url

  data = []

  doc = Nokogiri::HTML(open(url))

  doc.css('.data').map do |item|

    item.css('tr').each do |row|

      season = {
        team: '',
        years: "#{year1}-#{year2}",
        year1: "#{year1}",
        year2: "#{year2}",
        regular_season: true,
        games_played: 0,
        wins: 0,
        losses: 0,
        overtime: 0,
        points: 0,
        win_percentage: 0,
        goals_for: 0,
        goals_against: 0,
        power_play_goals_for: 0,
        power_play_opportunities: 0,
        power_play_percentage: 0,
        power_play_goals_against: 0,
        times_shorthanded: 0,
        penalty_kill_percentage: 0,
        shorthanded_goals_for: 0,
        shorthanded_goals_against: 0,
        shut_outs: 0,
        times_shut_out: 0
      }

      # City
      team = row.css('td:nth-child(2)').text
      season[:team] = team

      # Games Played
      gp = row.css('td:nth-child(3)').text
      season[:games_played] = gp.to_i

      # Wins
      w = row.css('td:nth-child(4)').text
      season[:wins] = w.to_i

      # Losses
      l = row.css('td:nth-child(5)').text
      season[:losses] = l.to_i

      # Overtime
      ot = row.css('td:nth-child(6)').text
      season[:overtime] = ot.to_i

      # Points
      p = row.css('td:nth-child(7)').text
      season[:points] = p.to_i

      # Win Percentage
      wp = row.css('td:nth-child(8)').text
      season[:win_percentage] = wp.to_f

      # Goals For
      gf = row.css('td:nth-child(9)').text
      season[:goals_for] = gf.to_i

      # Goals Against
      ga = row.css('td:nth-child(10)').text
      season[:goals_against] = ga.to_i

      # Power Play Goals For
      ppgf = row.css('td:nth-child(11)').text
      season[:power_play_goals_for] = ppgf.to_i

      # Power Play Opportunities
      ppo = row.css('td:nth-child(12)').text
      season[:power_play_opportunities] = ppo.to_i

      # Power Play Percentage
      ppp = row.css('td:nth-child(13)').text
      season[:power_play_percentage] = ppp.to_f

      # Power Play Goals Against
      ppga = row.css('td:nth-child(14)').text
      season[:power_play_goals_against] = ppga.to_i

      # Times Shorthanded
      tsh = row.css('td:nth-child(15)').text
      season[:times_shorthanded] = tsh.to_i

      # Penalty Kill Percentage
      pkp = row.css('td:nth-child(16)').text
      season[:penalty_kill_percentage] = pkp.to_f

      # Shorthanded Goals For
      shgf = row.css('td:nth-child(17)').text
      season[:shorthanded_goals_for] = shgf.to_i

      # Shorthanded Goals Against
      shga = row.css('td:nth-child(18)').text
      season[:shorthanded_goals_against] = shga.to_i

      # Shut Outs
      so = row.css('td:nth-child(19)').text
      season[:shut_outs] = so.to_i

      # Times Shut Out
      tso = row.css('td:nth-child(20)').text
      season[:times_shut_out] = tso.to_i

      data.push(season)

    end

  end

  sleep 1
  data

end

File.write("data.json", global_data.to_json)
