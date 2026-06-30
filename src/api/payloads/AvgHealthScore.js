export const AvgHealthScore = {
    url: `${import.meta.env.VITE_API_DOMAIN}/api/v1/chart/data?form_data=%7B%22slice_id%22%3A935%7D&dashboard_id=68`,
    payload: {
        "datasource": {
            "id": 288,
            "type": "table"
        },
        "force": false,
        "queries": [
            {
                "filters": [
                    {
                        "col": "channel_name_tvd",
                        "op": "IN",
                        "val": [
                            "VTV1"
                        ]
                    },
                    {
                        "col": "date",
                        "op": "TEMPORAL_RANGE",
                        "val": "No filter"
                    }
                ],
                "extras": {
                    "time_grain_sqla": "P1W",
                    "having": "",
                    "where": ""
                },
                "applied_time_extras": {},
                "columns": [
                    {
                        "timeGrain": "P1W",
                        "columnType": "BASE_AXIS",
                        "sqlExpression": "date",
                        "label": "date",
                        "expressionType": "SQL"
                    }
                ],
                "metrics": [
                    {
                        "aggregate": null,
                        "column": null,
                        "datasourceWarning": false,
                        "expressionType": "SQL",
                        "hasCustomLabel": false,
                        "label": "AVG(content_health_score) *100",
                        "optionName": "metric_yeomhe6bj8_w66xgh1sizb",
                        "sqlExpression": "AVG(content_health_score) *100"
                    }
                ],
                "annotation_layers": [],
                "series_limit": 0,
                "order_desc": true,
                "url_params": {
                    "native_filters_key": "gopTW064xfeVfPgqeEATzRimInw0vWV1HzEwNwRsvPZuh7bMBOaoEsOS6JPn_xN1"
                },
                "custom_params": {},
                "custom_form_data": {},
                "post_processing": [
                    {
                        "operation": "pivot",
                        "options": {
                            "index": [
                                "date"
                            ],
                            "columns": [],
                            "aggregates": {
                                "AVG(content_health_score) *100": {
                                    "operator": "mean"
                                }
                            },
                            "drop_missing_columns": true
                        }
                    },
                    {
                        "operation": "flatten"
                    }
                ]
            }
        ],
        "form_data": {
            "datasource": "288__table",
            "viz_type": "big_number",
            "slice_id": 935,
            "url_params": {
                "native_filters_key": "gopTW064xfeVfPgqeEATzRimInw0vWV1HzEwNwRsvPZuh7bMBOaoEsOS6JPn_xN1"
            },
            "x_axis": "date",
            "time_grain_sqla": "P1W",
            "metric": {
                "aggregate": null,
                "column": null,
                "datasourceWarning": false,
                "expressionType": "SQL",
                "hasCustomLabel": false,
                "label": "AVG(content_health_score) *100",
                "optionName": "metric_yeomhe6bj8_w66xgh1sizb",
                "sqlExpression": "AVG(content_health_score) *100"
            },
            "adhoc_filters": [
                {
                    "clause": "WHERE",
                    "comparator": "No filter",
                    "expressionType": "SIMPLE",
                    "operator": "TEMPORAL_RANGE",
                    "subject": "date"
                }
            ],
            "compare_lag": 1,
            "compare_suffix": "",
            "show_timestamp": false,
            "show_trend_line": true,
            "start_y_axis_at_zero": true,
            "color_picker": {
                "a": 1,
                "b": 135,
                "g": 122,
                "r": 0
            },
            "header_font_size": 0.4,
            "subheader_font_size": 0.15,
            "y_axis_format": "SMART_NUMBER",
            "time_format": "smart_date",
            "rolling_type": "None",
            "dashboards": [
                68
            ],
            "extra_form_data": {
                "filters": [
                    {
                        "col": "channel_name_tvd",
                        "op": "IN",
                        "val": [
                            "VTV1"
                        ]
                    }
                ]
            },
            "chart_id": 935,
            "label_colors": {},
            "shared_label_colors": [],
            "map_label_colors": {
                "AVG(dropoff_rate_by_view)": "#1FA8C9",
                "AVG(Watch Time Efficiency)": "#1FA8C9"
            },
            "extra_filters": [],
            "force": false,
            "result_format": "json",
            "result_type": "full"
        },
        "result_format": "json",
        "result_type": "full"
    }
};