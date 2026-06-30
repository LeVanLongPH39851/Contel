export const PrimeTimeChain19h0022h30 = {
    url: `${import.meta.env.VITE_API_DOMAIN}/api/v1/chart/data?form_data=%7B%22slice_id%22%3A940%7D&dashboard_id=68`,
    payload: {
        "datasource": {
            "id": 288,
            "type": "table"
        },
        "force": false,
        "queries": [
            {
                "time_range": "01-01-2026 : 01-01-2026",
                "filters": [
                    {
                        "col": "channel_name_tvd",
                        "op": "IN",
                        "val": [
                            "VTV1"
                        ]
                    },
                    {
                        "col": "start_time",
                        "op": "<=",
                        "val": "22:30:00"
                    },
                    {
                        "col": "start_time",
                        "op": ">=",
                        "val": "19:00:00"
                    },
                    {
                        "col": "date",
                        "op": "TEMPORAL_RANGE",
                        "val": "No filter"
                    }
                ],
                "extras": {
                    "having": "",
                    "where": ""
                },
                "applied_time_extras": {},
                "columns": [
                    "program_order",
                    "start_hour",
                    {
                        "expressionType": "SQL",
                        "label": "Chương trình",
                        "sqlExpression": "prev_program"
                    },
                    {
                        "expressionType": "SQL",
                        "label": "Chương trình tiếp theo",
                        "sqlExpression": "program_name"
                    }
                ],
                "metrics": [
                    {
                        "aggregate": null,
                        "column": null,
                        "datasourceWarning": false,
                        "expressionType": "SQL",
                        "hasCustomLabel": true,
                        "label": "% audience tiếp tục xem",
                        "optionName": "metric_e94mr6z8wks_qtxua2daft",
                        "sqlExpression": "AVG(lead_in_effect)*100"
                    },
                    {
                        "aggregate": null,
                        "column": null,
                        "datasourceWarning": false,
                        "expressionType": "SQL",
                        "hasCustomLabel": true,
                        "label": "% audience thoát ra",
                        "optionName": "metric_erdxszwfc3v_yfgqzapf6tm",
                        "sqlExpression": "100-AVG(lead_in_effect)*100"
                    }
                ],
                "orderby": [
                    [
                        {
                            "aggregate": null,
                            "column": null,
                            "datasourceWarning": false,
                            "expressionType": "SQL",
                            "hasCustomLabel": false,
                            "label": "program_order",
                            "optionName": "metric_y7xa1i4i3c_7nynt5ldaj",
                            "sqlExpression": "program_order"
                        },
                        true
                    ]
                ],
                "annotation_layers": [],
                "row_limit": 1000,
                "series_limit": 0,
                "series_limit_metric": {
                    "aggregate": null,
                    "column": null,
                    "datasourceWarning": false,
                    "expressionType": "SQL",
                    "hasCustomLabel": false,
                    "label": "program_order",
                    "optionName": "metric_y7xa1i4i3c_7nynt5ldaj",
                    "sqlExpression": "program_order"
                },
                "order_desc": false,
                "url_params": {
                    "native_filters_key": "gopTW064xfeVfPgqeEATzRimInw0vWV1HzEwNwRsvPZuh7bMBOaoEsOS6JPn_xN1"
                },
                "custom_params": {},
                "custom_form_data": {},
                "post_processing": [],
                "time_offsets": []
            }
        ],
        "form_data": {
            "datasource": "288__table",
            "viz_type": "table",
            "slice_id": 940,
            "url_params": {
                "native_filters_key": "gopTW064xfeVfPgqeEATzRimInw0vWV1HzEwNwRsvPZuh7bMBOaoEsOS6JPn_xN1"
            },
            "query_mode": "aggregate",
            "groupby": [
                "program_order",
                "start_hour",
                {
                    "expressionType": "SQL",
                    "label": "Chương trình",
                    "sqlExpression": "prev_program"
                },
                {
                    "expressionType": "SQL",
                    "label": "Chương trình tiếp theo",
                    "sqlExpression": "program_name"
                }
            ],
            "temporal_columns_lookup": {
                "date": true,
                "start_of_week": true
            },
            "metrics": [
                {
                    "aggregate": null,
                    "column": null,
                    "datasourceWarning": false,
                    "expressionType": "SQL",
                    "hasCustomLabel": true,
                    "label": "% audience tiếp tục xem",
                    "optionName": "metric_e94mr6z8wks_qtxua2daft",
                    "sqlExpression": "AVG(lead_in_effect)*100"
                },
                {
                    "aggregate": null,
                    "column": null,
                    "datasourceWarning": false,
                    "expressionType": "SQL",
                    "hasCustomLabel": true,
                    "label": "% audience thoát ra",
                    "optionName": "metric_erdxszwfc3v_yfgqzapf6tm",
                    "sqlExpression": "100-AVG(lead_in_effect)*100"
                }
            ],
            "all_columns": [],
            "percent_metrics": [],
            "adhoc_filters": [
                {
                    "clause": "WHERE",
                    "comparator": "22:30:00",
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "filterOptionName": "filter_vy7s49pebk7_4y4xf2urhgh",
                    "isExtra": false,
                    "isNew": false,
                    "operator": "<=",
                    "operatorId": "LESS_THAN_OR_EQUAL",
                    "sqlExpression": null,
                    "subject": "start_time"
                },
                {
                    "clause": "WHERE",
                    "comparator": "19:00:00",
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "filterOptionName": "filter_v807gy5gpe_pc2fl5tc3sg",
                    "isExtra": false,
                    "isNew": false,
                    "operator": ">=",
                    "operatorId": "GREATER_THAN_OR_EQUAL",
                    "sqlExpression": null,
                    "subject": "start_time"
                },
                {
                    "clause": "WHERE",
                    "comparator": "No filter",
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "filterOptionName": "filter_1ulysa6hvbq_42yz4fh2wl3",
                    "isExtra": true,
                    "isNew": false,
                    "operator": "TEMPORAL_RANGE",
                    "sqlExpression": null,
                    "subject": "date"
                }
            ],
            "timeseries_limit_metric": {
                "aggregate": null,
                "column": null,
                "datasourceWarning": false,
                "expressionType": "SQL",
                "hasCustomLabel": false,
                "label": "program_order",
                "optionName": "metric_y7xa1i4i3c_7nynt5ldaj",
                "sqlExpression": "program_order"
            },
            "order_by_cols": [],
            "row_limit": 1000,
            "server_page_length": 10,
            "order_desc": false,
            "table_timestamp_format": "smart_date",
            "include_search": true,
            "allow_rearrange_columns": false,
            "allow_render_html": true,
            "show_cell_bars": true,
            "color_pn": true,
            "comparison_color_scheme": "Green",
            "conditional_formatting": [],
            "comparison_type": "values",
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
                ],
                "time_range": "01-01-2026 : 01-01-2026"
            },
            "chart_id": 940,
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