import { Column, Entity, Index } from "typeorm";

@Index("tempat_pembayaran_sppt_masal_pkey", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "thnTpSpptMasal"], { unique: true })
@Entity("tempat_pembayaran_sppt_masal", { schema: "public" })
export class TempatPembayaranSpptMasal {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "thn_tp_sppt_masal", length: 4 })
  thnTpSpptMasal!: string;

  @Column("character", { name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { name: "kd_tp", length: 2 })
  kdTp!: string;
}
