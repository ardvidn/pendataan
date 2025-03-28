import { Column, Entity, Index } from "typeorm";

@Index("sim_hrg_satuan_pkey", ["kdDati2", "kdKegiatan", "kdPekerjaan", "kdPropinsi", "simThnHrgSatuan"], { unique: true })
@Entity("sim_hrg_satuan", { schema: "public" })
export class SimHrgSatuan {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "sim_thn_hrg_satuan", length: 4 })
  simThnHrgSatuan!: string;

  @Column("character", { primary: true, name: "kd_pekerjaan", length: 2 })
  kdPekerjaan!: string;

  @Column("character", { primary: true, name: "kd_kegiatan", length: 2 })
  kdKegiatan!: string;

  @Column("numeric", { name: "sim_hrg_satuan", precision: 11, scale: 4 })
  simHrgSatuan!: string;
}
