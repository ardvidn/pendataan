import { Column, Entity, Index } from "typeorm";

@Index("ref_adm_kantor_pkey", ["kdDati2", "kdKantor", "kdKanwil", "kdKecamatan", "kdPropinsi"], { unique: true })
@Entity("ref_adm_kantor", { schema: "public" })
export class RefAdmKantor {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;
}
