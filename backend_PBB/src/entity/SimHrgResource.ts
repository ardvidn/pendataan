import { Column, Entity, Index } from "typeorm";

@Index("sim_hrg_resource_pkey", ["kdDati2", "kdGroupResource", "kdPropinsi", "kdResource", "simThnHrgResource"], { unique: true })
@Entity("sim_hrg_resource", { schema: "public" })
export class SimHrgResource {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", {
    primary: true,
    name: "sim_thn_hrg_resource",
    length: 4,
  })
  simThnHrgResource!: string;

  @Column("character", { primary: true, name: "kd_group_resource", length: 2 })
  kdGroupResource!: string;

  @Column("character", { primary: true, name: "kd_resource", length: 2 })
  kdResource!: string;

  @Column("numeric", { name: "sim_hrg_resource", precision: 10, scale: 2 })
  simHrgResource!: string;
}
