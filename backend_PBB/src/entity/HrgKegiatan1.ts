import { Column, Entity } from "typeorm";

@Entity("hrg_kegiatan1", { schema: "public" })
export class HrgKegiatan1 {
  @Column("character", { name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { name: "thn_kegiatan", length: 4 })
  thnKegiatan!: string;

  @Column("character", { name: "kd_jpb", length: 2 })
  kdJpb!: string;

  @Column("character", { name: "tipe_bng", length: 5 })
  tipeBng!: string;

  @Column("character", { name: "kd_bng_lantai", length: 8 })
  kdBngLantai!: string;

  @Column("character", { name: "kd_pekerjaan", length: 2 })
  kdPekerjaan!: string;

  @Column("character", { name: "kd_kegiatan", length: 2 })
  kdKegiatan!: string;

  @Column("numeric", { name: "hrg_kegiatan", precision: 11, scale: 4 })
  hrgKegiatan!: string;
}
